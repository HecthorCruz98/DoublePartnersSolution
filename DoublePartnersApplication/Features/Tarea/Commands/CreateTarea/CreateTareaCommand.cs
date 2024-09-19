using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.CreateTarea
{
    public class CreateTareaCommand : IRequest<bool>
    {
        public string descripcionTarea { get; set; }
        public int idEstado { get; set; }
        public int idUsuario { get; set; }
        public string createDate { get; set; }
        public string createUser { get; set; }
    }
}
