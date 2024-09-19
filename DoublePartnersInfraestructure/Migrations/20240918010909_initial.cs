using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DoublePartnersInfraestructure.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Estados",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    descripcionEstado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    modifyDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    modifyUser = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    descripcionRol = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    modifyDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    modifyUser = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombreUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    apellidousuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    loginUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contrasenaUsuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    idRol = table.Column<int>(type: "int", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    modifyDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    modifyUser = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Usuarios_Roles_idRol",
                        column: x => x.idRol,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tareas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    descripcionTarea = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    idEstado = table.Column<int>(type: "int", nullable: false),
                    idUsuario = table.Column<int>(type: "int", nullable: false),
                    createDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createUser = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    modifyDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    modifyUser = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tareas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tareas_Estados_idEstado",
                        column: x => x.idEstado,
                        principalTable: "Estados",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Tareas_Usuarios_idUsuario",
                        column: x => x.idUsuario,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tareas_idEstado",
                table: "Tareas",
                column: "idEstado");

            migrationBuilder.CreateIndex(
                name: "IX_Tareas_idUsuario",
                table: "Tareas",
                column: "idUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Usuarios_idRol",
                table: "Usuarios",
                column: "idRol");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tareas");

            migrationBuilder.DropTable(
                name: "Estados");

            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
