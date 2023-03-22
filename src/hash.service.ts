import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class HashService {
  private readonly hashAlgorithm = 'sha256';

  async hash(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const hash = crypto.createHash(this.hashAlgorithm);
      hash.update(value);
      hash.digest('hex');
      hash.on('readable', () => {
        const data = hash.read();
        if (data) {
          resolve(data.toString('hex'));
        }
      });
      hash.on('error', (err) => {
        reject(err);
      });
    });
  }
}
