using AngularMoviesApi.DTOs;
using AngularMoviesApi.Entities;
using AutoMapper;

namespace AngularMoviesApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<GenresDTO,Genres>().ReverseMap();
            CreateMap<GenresCreationDTO,Genres>().ReverseMap();

            CreateMap<ActorDTO,Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>();

        }
    }
}
