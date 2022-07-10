using AngularMoviesApi.Validation;
using System.ComponentModel.DataAnnotations;

namespace AngularMoviesApi.DTOs
{
    public class GenresCreationDTO
    {
        [Required(ErrorMessage = "the felild with {0} is required")]
        [StringLength(50)]
        [FirtstLetterUppercase]
        public string Name { get; set; }
    }
}
