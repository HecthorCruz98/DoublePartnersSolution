using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublePartnersApplication.Features.Tareas.Commands.UpdateTarea
{
    public class UpdateTareaCommand : IRequest<bool>
    {
        public int Id { get; set; }
        public string descripcionTarea { get; set; }
        public int idUsuario { get; set; }
        public int idEstado { get; set; }
        public string modifyDate { get; set; }
        public string modifyUser { get; set; }
    }
}
