using FlightProvider.Services.Services;
using FlightProviderService;
using Microsoft.Extensions.DependencyInjection;

namespace FlightProvider.Services
{
    public static class ServiceRegistration
    {
        public static IServiceCollection AddMyServices(this IServiceCollection services) => services.AddScoped<IMyFlightProviderService>(_
            => new MyFlightProviderService(new AirSearchClient(AirSearchClient.EndpointConfiguration.BasicHttpBinding_IAirSearch)));

    }
}
