const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  //prueba 1 add
test('add user que no esta en la lista', () => {  
    const controller = new UserController();   //lista vaci
    const user = new User(1, "Sofia", "sofia@generation.org");

    controller.add(user);
    expect(controller.getUsers()).toContain(user);
});

//prueba 2 remove
test('remove user que no esta en la lista', () => {  
    const controller = new UserController();   //lista vaci
    const userA = new User(1, "Sofia", "sofia@generation.org");
    const userB = new User(2, "Andres", "andres@generation.org");
    
    controller.add(userA);
    controller.remove(userB);
    expect(controller.getUsers()).toEqual([userA]);
});

//prueba 3 funcion 'finByEamil

test('findByEmail devuelve el usuario cuando el email existe', () => {
    const controller = new UserController();
    const user = new User(1, "Sofia", "sofia@generation.org");

    controller.add(user);
    const resultado = controller.findByEmail("sofia@generation.org");

    expect(resultado).toBe(user);
});

test('findByEmail devuelve undefined cuando el email no existe', () => {
    const controller = new UserController();
    const user = new User(1, "Sofia", "sofia@generation.org");

    controller.add(user);
    const resultado = controller.findByEmail("otro@generation.org");

    expect(resultado).toBeUndefined();
});

//prueba 4 funcion findById
test('findById devuelve el usuario cuando el id existe', () => {
    const controller = new UserController();
    const user = new User(1, "Sofia", "sofia@generation.org");

    controller.add(user);
    const resultado = controller.findById(1);

    expect(resultado).toBe(user);
});

test('findById devuelve undefined cuando el id no existe', () => {
    const controller = new UserController();
    const user = new User(1, "Sofia", "sofia@generation.org");

    controller.add(user);
    const resultado = controller.findById(99);

    expect(resultado).toBeUndefined();
});

