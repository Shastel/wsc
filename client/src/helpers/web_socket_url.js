const PATH = '/master';

function getProtocol(protocol) {
    return protocol === 'http:' ? 'ws://' : 'wss://';
}

export function getUrl(location) {
    const protocol = getProtocol(location.protocl);
    return `${protocol}${location.host}${PATH}`;
}
