using AngularMoviesApi.Entities;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace AngularMoviesApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        public DbSet<Genres> Genres { get; set; }
        
        public DbSet<Actor> Actors { get; set; }
    }
}
