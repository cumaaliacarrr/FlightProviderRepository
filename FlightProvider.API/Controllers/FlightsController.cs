using AutoMapper;
using FlightProvider.API.Model;
using FlightProvider.Services.Services;
using FlightProviderService;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System.Net;

namespace FlightProvider.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FlightsController : ControllerBase
{
    private readonly IMyFlightProviderService _flightProviderService;
    private readonly IMapper _mapper;
    public FlightsController(IMyFlightProviderService flightProviderService, IMapper mapper)
    {
        _flightProviderService = flightProviderService;
        _mapper = mapper;
    }

    [HttpPost("search")]
    [SwaggerResponse(200, Type = typeof(SearchRequestModel))]
    public async Task<ActionResult<SearchRequestModel>> Search(SearchRequestModel request)
    {
        var mapper = _mapper.Map<SearchRequestModel, SearchRequest>(request);
        var response = await _flightProviderService.Search(mapper);
        return Ok(response.AvailabilitySearchResult);
    }
    [HttpPost("flightDetail")]
    [SwaggerResponse(200, Type = typeof(SearchRequestModel))]
    public async Task<ActionResult<GetRequestModel>> FlightDetail(GetRequestModel request)
    {
        var allFlightModel = new SearchRequestModel();
        var mapper = _mapper.Map<SearchRequestModel, SearchRequest>(allFlightModel);
        var resultFlightList= await _flightProviderService.Search(mapper);

        var response = resultFlightList.AvailabilitySearchResult.FlightOptions.Where(x => x.FlightNumber == request.FlightNumber).First();

        return Ok(response);
    }
}
