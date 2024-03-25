using AutoMapper;
using FlightProvider.API.Model;
using FlightProviderService;

namespace FlightProvider.API.Helpers
{
    public class AutoMappingProfile:Profile
    {
        public AutoMappingProfile()
        {
            CreateMap<SearchRequestModel,SearchRequest>().ReverseMap();
        }
    }
}
