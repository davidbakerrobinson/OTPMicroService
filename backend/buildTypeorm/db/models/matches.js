var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** @module Models/matches */
import { BaseEntity, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile.js";
/**
 * This is for matching users profiles
 * The Entity will have a primary key composed of the
 * two foreign keys: matcherID, matcheeID
 * *So two ManytoOne keys
 */
let Matches = class Matches extends BaseEntity {
    id;
    matcheeID;
    matcherID;
    created_at;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Matches.prototype, "id", void 0);
__decorate([
    ManyToOne(() => Profile, (profile) => profile.swipedRightOn, {
        cascade: true,
        onDelete: "CASCADE"
    }),
    JoinColumn(),
    __metadata("design:type", Object)
], Matches.prototype, "matcheeID", void 0);
__decorate([
    ManyToOne(() => Profile, (profile) => profile.swipedRight, {
        cascade: true,
        onDelete: "CASCADE"
    }),
    JoinColumn(),
    __metadata("design:type", Object)
], Matches.prototype, "matcherID", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], Matches.prototype, "created_at", void 0);
Matches = __decorate([
    Entity({ name: 'matches' })
], Matches);
export { Matches };
//# sourceMappingURL=matches.js.map