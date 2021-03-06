module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: 
            {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
            },
            name: 
            {
              type: DataTypes.STRING,
              allowNull: false,
            },
            email:
            {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
            },
            password:
            {
              type: DataTypes.STRING,
              allowNull: false,
            },
            cpf: {
              type: DataTypes.STRING,
              unique: true,
            },
            birthdate: DataTypes.DATEONLY,
            phone: DataTypes.STRING,
            picture: DataTypes.STRING,
            roles_id: DataTypes.INTEGER,
        }, {
            paranoid: true,
        }
    )

    User.associate = (models) => {
      User.hasMany(models.Address, {
        foreignKey: 'users_id',
      })
    }


    return User;
}