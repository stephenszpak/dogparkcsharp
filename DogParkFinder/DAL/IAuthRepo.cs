using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DogParkFinder.Models;

namespace DogParkFinder.DAL
{
    public interface IAuthRepo
    {
        ApplicationUser GetCurrentUserById(string aspNetUserId);
    }
}
