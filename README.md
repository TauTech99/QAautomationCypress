## 📊 Códigos de Estado HTTP

| Código | Significado | Uso en el proyecto |
|--------|-------------|-------------------|
| 200 | OK | Peticiones exitosas generales |
| 201 | Created | Registro exitoso de usuarios |
| 400 | Bad Request | Datos inválidos |
| 401 | Unauthorized | Sin autorización |
| 404 | Not Found | Recurso no encontrado |

## 🔧 Comandos Útiles

```bash
# Ejecutar todos los tests
npx cypress run

# Ejecutar un test específico
npx cypress run --spec "cypress/e2e/apiSignUp.cy.js"

# Abrir interfaz gráfica
npx cypress open

# Ejecutar en modo headless
npx cypress run --headless
```

## 📄 Fixtures

### `tags.json`
Archivo de datos de prueba para tags:

{
    "tags": [
        "Test",
        "Git",
        "Zoom",
        "YouTube",
        "Blog",
        "Bondar Academy",
        "Cypress",
        "Testing",
        "JavaScript",
        "Programming"
    ]
}


## 🛠️ Técnicas Utilizadas

- **Intercepción de APIs**: `cy.intercept()` para capturar peticiones HTTP
- **Alias**: `.as()` para referenciar intercepts
- **Fixtures**: Archivos JSON para datos de prueba
- **Mocking**: Simulación de respuestas de API
- **Generación de datos únicos**: Para evitar conflictos en tests
- **Validaciones**: Verificación de códigos de estado y contenido

## 🌐 URL de Pruebas
- **Aplicación**: https://conduit.bondaracademy.com/
- **API Base**: `/api/`

## 📝 Notas Importantes

1. **Datos Únicos**: Cada ejecución genera usernames y emails únicos
2. **Fixtures vs Fixture**: 
   - `fixtures/` = carpeta
   - `fixture:` = comando para usar archivos
3. **Códigos 201**: Confirman creación exitosa de recursos
4. **Mocking**: Permite testing independiente del backend

## 🚀 Próximas Mejoras
- [ ] Implementar tests de login
- [ ] Agregar validaciones de errores
- [ ] Tests de stress con múltiples usuarios
- [ ] Integración con CI/CD

---
**Autor**: Tester de Software  
**Herramientas**: Cypress, JavaScript, JSON


## Recursos
- [Documentación oficial de Cypress](https://docs.cypress.io/) 

![alt text](image.png)
