#!/bin/bash
key=smc.org.in
if ipfs key list | grep -q $key; then
  echo "Key $key already exists "
else
  echo "Generating key $key:"
  ipfs key gen --type=rsa --size=2048 $key
fi
hash=`ipfs add -r -q dist | tail -1`
ipnshash=`ipfs name publish -Q --key=$key $hash`
base32=`echo $ipnshash | ipfs cid base32`
echo "Published at IPFS: $hash"
echo "Published at IPNS: $ipnshash"
echo "Domain: https://ipfs.io/ipns/$ipnshash"
echo "Domain: https://$base32.ipfs.dweb.link"