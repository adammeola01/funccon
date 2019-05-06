interface conSpec {
    size: number;
    funcs: object;
    done: any;
}
declare function con(obj:conSpec): Promise<void>;
export default con;
