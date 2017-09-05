using DogParkFinder.DAL;
using DogParkFinder.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DogParkFinder.Controllers
{
    public class AuthController : ApiController
    {
        public IAuthRepo _repo { get; set; }

        public AuthController(IAuthRepo repo)
        {
            _repo = repo;
        }

        private ApplicationUser GetCurrentApplicationUser()
        {
            string _currentUser = User.Identity.GetUserId();

            return _repo.GetCurrentUserById(_currentUser);
        }
    }
}
