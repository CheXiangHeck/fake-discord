export class Encryption {
  private cryptoKey!: CryptoKey;
  private values!: Uint8Array;

  constructor(encryptionKey: string) {
    this.initializeEncryption(encryptionKey);
  }

  async initializeEncryption(encryptionKey: string | Uint8Array) {
    this.values = crypto.getRandomValues(new Uint8Array(12));
  
    let keyData: Uint8Array;
  
    // Check if encryptionKey is base64 string
    if (typeof encryptionKey === "string") {
      // Ensure it is a valid base64 string
      const base64Regex = /^[A-Za-z0-9+/=]+$/;
      if (!base64Regex.test(encryptionKey)) {
        throw new Error("Invalid base64 encoding");
      }
  
      // Convert the base64 string to Uint8Array
      keyData = Uint8Array.from(atob(encryptionKey), (c) => c.charCodeAt(0));
    } else {
      // If it's already a Uint8Array, use it directly
      keyData = encryptionKey;
    }
  
    // Now import the key into crypto
    this.cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }
  

  async encrypte(data: string) {
    const encodedData = new TextEncoder().encode(data);

    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: this.values,
      },
      this.cryptoKey,
      encodedData
    );

    return {
      encryptedData: Buffer.from(encryptedData).toString("base64"),
    };
  }

  async decrypte(encryptedData: string) {
    try {
      const decodedData = await crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: this.values,
        },
        this.cryptoKey,
        new Uint8Array(atob(encryptedData).split("").map(c => c.charCodeAt(0)))
      );

      return new TextDecoder().decode(decodedData);
    } catch (error) {
      return JSON.stringify({ payload: null });
    }
  }
}
