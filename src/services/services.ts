export class Services {

    public getData(cb: (result: any) => void) {
        fetch('./src/services/data.json')
            .then(res  => res.json())
            .then(result => {
                cb(result);
            });
    }
}
