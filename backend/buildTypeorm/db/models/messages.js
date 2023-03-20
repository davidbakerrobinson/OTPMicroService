var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/messages */
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.js";
/**
 * This is for messaging between users profiles
 * The entity will have a generatedId, a textField, and a generated created_at date
 * Two ManytoOne keys
 */
let Messages = class Messages extends BaseEntity {
    id;
    message;
    messageSender;
    messageReceiver;
    sent_at;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Messages.prototype, "id", void 0);
__decorate([
    Column({ type: "text" }),
    __metadata("design:type", String)
], Messages.prototype, "message", void 0);
__decorate([
    ManyToOne(() => Profile, (profile) => profile.messageSenders, {
        cascade: true,
        onDelete: "CASCADE"
    }),
    __metadata("design:type", Object)
], Messages.prototype, "messageSender", void 0);
__decorate([
    ManyToOne(() => Profile, (profile) => profile.messageReceivers, {
        cascade: true,
        onDelete: "CASCADE"
    }),
    __metadata("design:type", Object)
], Messages.prototype, "messageReceiver", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], Messages.prototype, "sent_at", void 0);
Messages = __decorate([
    Entity()
], Messages);
export { Messages };
//# sourceMappingURL=messages.js.map