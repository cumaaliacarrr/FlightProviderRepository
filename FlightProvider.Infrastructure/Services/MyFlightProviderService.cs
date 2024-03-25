using FlightProviderService;

namespace FlightProvider.Services.Services
{
    public class MyFlightProviderService : IMyFlightProviderService
    {
        private readonly IAirSearch _client;

        public MyFlightProviderService(IAirSearch client)
        {
            _client = client;
        }

        public Task<AvailabilitySearchResponse> Search(SearchRequest request) => _client.AvailabilitySearchAsync(new AvailabilitySearchRequest(request));
    }
}
