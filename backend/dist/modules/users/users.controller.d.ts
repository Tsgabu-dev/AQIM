import { UsersService } from './users.service';
import type { UpdateUserProfileInput, UserProfile } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(id: string): Promise<UserProfile>;
    updateProfile(id: string, input: UpdateUserProfileInput): Promise<UserProfile>;
}
