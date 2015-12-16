module.exports= function(sequelize, DataTypes){
	return sequelize.define('Contacto', {nombres: DataTypes.STRING,
									   apellidoPaterno: DataTypes.STRING,
									   apellidoMaterno: DataTypes.STRING,
									   telefonoPersonal: DataTypes.INTEGER,
									   telefonoDomicilio: DataTypes.INTEGER,
									   cumpleanos: DataTypes.DATE
									   });
}
