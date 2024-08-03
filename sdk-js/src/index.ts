export const client = {
  init: () => {
    const message =
      "Nestor::JavaScript::Client::Init: I'm a mock loader, loading external scripts.";
    console.log(message);
    return message;
  },
  track: (title: string, opts: unknown) => {
    const message = `Nestor::JavaScript::Client::EVENT: - I'm a mock tracker - ${title} - ${JSON.stringify(opts)}.`;
    console.log(message);
    return message;
  },
};

export const server = {
  init: () => {
    const message =
      "Nestor::NodeJS::Server::Init: I'm a mock loader, loading external scripts.";
    console.log(message);
    return message;
  },
  track: (title: string, opts: unknown) => {
    const message = `Nestor::NodeJS::Server::EVENT: - I'm a mock tracker - ${title} - ${JSON.stringify(opts)}.`;
    console.log(message);
    return message;
  },
};
