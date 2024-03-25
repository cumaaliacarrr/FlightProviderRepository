using FlightProviderService;

namespace FlightProvider.Services.Services
{
    public interface IMyFlightProviderService
    {
        Task<AvailabilitySearchResponse> Search(SearchRequest dto);
    }
}
