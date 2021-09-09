type ObjWithProp<T,K extends string, P> = T & {[k in K]: P};

export class ObjectManipulator <T>{

    constructor(protected obj: T) {}

    public set<K extends string, P>(key: K, value: P): ObjectManipulator<ObjWithProp<T, K, P>> {
        return new ObjectManipulator({...this.obj, [key]: value} as ObjWithProp<T, K, P>);
    }

    public get<K extends keyof T> (key: K): T[K]{
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T,K>>{
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}
