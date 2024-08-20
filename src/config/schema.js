const signUpDataValidation = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters').max(20, 'Name cannot be more than 20 characters'),
    profileImage: z.string().optional(),
    phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters').max(15, 'Phone number cannot be more than 15 characters'),
    alternatePhoneNumber: z.string().min(10, 'Phone number must be at least 10 characters').max(15, 'Phone number cannot be more than 15 characters').optional(),
    email: z.string().email('Invalid email address').min(10, 'Email must be at least 10 characters').max(50, 'Email cannot be more than 50 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters').max(20, 'Password cannot be more than 20 characters'),
    userType: z.enum(['WHOLE_SELLER']).optional(),
    address: z.object({
        country: z.string().min(3, 'Country name must be at least 3 characters'),
        state: z.string().min(3, 'State name must be at least 3 characters'),
        city: z.string().min(3, 'City name must be at least 3 characters'),
        pinCode: z.string().min(4, 'Pin code must be at least 4 characters'),
        street: z.string().min(3, 'Street must be at least 10 characters'),
    })
})