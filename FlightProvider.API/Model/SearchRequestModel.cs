namespace FlightProvider.API.Model
{
    public class SearchRequestModel
    {
        public string Destination { get; set; }
        public string Origin { get; set; }
        public DateTime DepartureDate { get; set; }
    }
}
