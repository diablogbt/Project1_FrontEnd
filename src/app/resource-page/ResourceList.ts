export class ResourceList{
    name: String;
    cost_code: String;

    getFullList(): string{
        return this.name + ' ' + this.cost_code;
    }
}