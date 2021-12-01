
import aDetection from "./aDetection";
import Constants from "./Constants";

export default class URLBlackListDetection extends aDetection {

    private static instance: URLBlackListDetection;

    private constructor() {
        super();
    }

    public static getInstance(): URLBlackListDetection {
        if (URLBlackListDetection.instance===undefined) {
            URLBlackListDetection.instance = new URLBlackListDetection();
        }
        return URLBlackListDetection.instance;
    }

    async detect(url: string): Promise<boolean> {
        let res = await this.sendRequest(
            url,
            { ['X-Api-Key']: Constants.API_KEY },
        );
        return res["malicious"];
    }
}
