function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.57.0", "255.255.255.0"))
        return "DIRECT";

    return "SOCKS 192.168.57.89:1080";
}
