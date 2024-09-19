using AutoMapper;
using DoublePartnersApplication.Features.Tareas.Commands.CreateTarea;
using DoublePartnersApplication.Features.Tareas.Commands.DeleteTarea;
using DoublePartnersApplication.Features.Tareas.Commands.UpdateTarea;
using DoublePartnersApplication.Features.Usuario.Commands.CreateUsuario;
using DoublePartnersApplication.Features.Usuario.Commands.DeleteUsuario;
using DoublePartnersApplication.Features.Usuario.Commands.UpdateUsuario;
using DoublePartnersApplication.Models;
using DoublePartnersDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<CreateUsuarioCommand, Usuario>();
            CreateMap<UpdateUsuarioCommand, Usuario>();
            CreateMap<DeleteUsuarioCommand, Usuario>();
            CreateMap<Usuario, UsuarioVm>();

            CreateMap<CreateTareaCommand, Tarea>();
            CreateMap<UpdateTareaCommand, Tarea>();
            CreateMap<DeleteTareaCommand, Tarea>();
            CreateMap<Tarea, TareaVm>();

            CreateMap<Estado, EstadoVm>();

            CreateMap<Rol, RolVm>();

        }
    }
}
