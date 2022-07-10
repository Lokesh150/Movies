using System.ComponentModel.DataAnnotations;
using AngularMoviesApi.Validation;

namespace AngularMoviesApi.Entities
{
    public class Genres
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "the felild with {0} is required")]
        [StringLength(50)]
        [FirtstLetterUppercase]
        public string Name { get; set; }
    }
}
