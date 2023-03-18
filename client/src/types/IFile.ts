export interface Ifile {
    name: string;
    type: string;
}

export interface IBufferData {
    filename: string;
    buffer: {
        data?: ArrayBuffer | any;
        type?: string;
    };
}
