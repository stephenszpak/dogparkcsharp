using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DogParkFinder.Models;

namespace DogParkFinder.DAL
{
    public class AuthRepo : IAuthRepo
    {
        readonly ApplicationDbContext _context;

        public AuthRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public ApplicationUser GetCurrentUserById(string aspNetUserId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == aspNetUserId);
        }
    }
}