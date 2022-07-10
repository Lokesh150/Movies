
using AngularMoviesApi.DTOs;
using AngularMoviesApi.Entities;
using AngularMoviesApi.Filters;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenresController( ILogger<GenresController> logger , ApplicationDbContext context,
            IMapper mapper)
        {
            
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<GenresDTO>>> Get()
        {
            logger.LogInformation("Getting Genres Information");

            var genres = await context.Genres.OrderBy( g => g.Name).ToListAsync();


            return mapper.Map<List<GenresDTO>>(genres);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GenresDTO>> Get(int id)
        {
            
            var genre = await context.Genres.FirstOrDefaultAsync(g =>g.Id == id);

            if(genre == null)
            {
                return NotFound();
            }
            return mapper.Map<GenresDTO>(genre);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenresCreationDTO genresCreationDTO)
        {
            var genre = mapper.Map<Genres>(genresCreationDTO);
            context.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put (int id , [FromBody] GenresCreationDTO genresCreationDTO)
        {
            var genre = mapper.Map<Genres>(genresCreationDTO);
            genre.Id = id;
            context.Entry(genre).State = EntityState.Modified; 
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await context.Genres.FirstOrDefaultAsync(g => g.Id == id);

            if(genre == null)
            {
                return NotFound();
            }

            context.Remove(genre);
            await context.SaveChangesAsync();
            return NoContent();
        }

    }
}
