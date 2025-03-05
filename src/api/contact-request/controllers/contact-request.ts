/**
 * contact-request controller
 */

import { factories } from '@strapi/strapi'
const {createCoreController} = factories;

export default createCoreController('api::contact-request.contact-request', ({ strapi }) => ({
    async create(ctx) {
        let entity;
        console.log('Subscriber created:', ctx.request.body);

        try {
            entity = await super.create(ctx); // Call the original create function
            console.log('Email:', entity.data.email);
            
            try {
                // email to user 
                strapi.plugin("email-designer-5").service("email").sendTemplatedEmail(
                    {
                        to: entity.data.email,
                    },
                    {
                        templateReferenceId: 1,
                        // If provided here will override the template's subject.
                        // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                    },
                    {
                        // this object must include all variables you're using in your email template

                    }
                );

                // email to admin
                strapi.plugin("email-designer-5").service("email").sendTemplatedEmail(
                    {
                        to: 'siddhant@instient.ai',
                    },
                    {
                        templateReferenceId: 2,
                        // If provided here will override the template's subject.
                        // Can include variables like `Thank you for your order {{= USER.firstName }}!`
                    },
                    {
                        // this object must include all variables you're using in your email template
                        user_email: entity.data.email,
        
                    }
                );

            } catch (err) {
                console.error('Error sending email:', err);
            }

            return entity;
        } catch (err) {
            ctx.throw(500, err);
        }
    },
}));