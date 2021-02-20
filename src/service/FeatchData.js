export default class FeatchData {
    starUrl = 'https://api.spacexdata.com/v4/';

    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error (`get errors ${res.status}`);
        }

        return await res.json();
    };

    getRocket = async () => 
        await this.getResource(this.starUrl + 'rockets');

    getLaunches = async () => 
        await this.getResource(this.starUrl + 'launches/past');

    getCompany = async () => 
        await this.getResource(this.starUrl + 'company');
}