using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DogParkFinder.Startup))]
namespace DogParkFinder
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
