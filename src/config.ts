interface Configs {
  googleMapApiKey: string,
}

const configs: Configs = {
  googleMapApiKey: process.env.GOOGLE_MAP_API_KEY,
};

export default configs;
