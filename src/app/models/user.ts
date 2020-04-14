export class Roles{
    editor: boolean;
    admin: boolean;
}

export class User {
    $id: string;
    nombre: string;
    password: string;
    roles: Roles;
}
