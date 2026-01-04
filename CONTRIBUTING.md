# Sanrio Store - Contribución

## Gracias por contribuir a Sanrio Store! 🎀

### Antes de Empezar

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Sigue las guías de estilo del proyecto
4. Escribe pruebas para nuevas características
5. Asegúrate de que todos los tests pasen

## Estilo de Código

### TypeScript
- Tipos explícitos, evitar `any`
- Interfaces para objetos
- Enums para constantes
- Strict mode activado

### React
- Functional components con hooks
- Props typed con TypeScript
- Nombres descriptivos para components
- Memoization cuando sea necesario

### Commit Messages
```
type(scope): subject

body

footer
```

Types:
- `feat`: Nueva característica
- `fix`: Bug fix
- `docs`: Documentación
- `style`: Formato
- `refactor`: Cambios sin funcionalidad
- `test`: Tests
- `chore`: Tareas mantenimiento

Ejemplo:
```
feat(products): add random product selector for gamification

Implement random product selection feature with animation
Closes #123
```

## Reportar Bugs

Use el issue template y proporcione:
1. Descripción clara del bug
2. Pasos para reproducir
3. Comportamiento esperado
4. Comportamiento actual
5. Screenshots si es aplicable
6. Entorno (OS, Browser, Node version)

## Proponer Features

1. Abre una issue discutiendo la feature
2. Espera feedback de los maintainers
3. Implementa siguiendo las guidelines
4. Crea un Pull Request con referencia a la issue

## Pull Request Process

1. Update README.md si es necesario
2. Update CHANGELOG.md
3. Asegura que nuevos tests pasen
4. Mantén la cobertura de tests > 80%
5. Requiere al menos 1 review
6. Squash commits antes de merge

## Code Review

Los reviewers buscan:
- Funcionalidad correcta
- Tests adecuados
- Código limpio y legible
- Sin regressions
- Documentación completa

## License

Al contribuir, aceptas que tu código sea licenciado bajo MIT License.

---

¡Gracias por mejorar Sanrio Store! 💖
