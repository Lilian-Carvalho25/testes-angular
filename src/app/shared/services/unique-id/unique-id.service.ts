import { Injectable } from "@angular/core"
import { v4 as uuidv4 } from "uuid"

@Injectable()
export class UniqueIdService {
    private numberOfGeneratedIds = 0;

    private validId = /^[A-Za-z]+[\W\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix || !this.validId.test(prefix)) {
            throw new Error("Prefix cannot be empty.");
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }
}
