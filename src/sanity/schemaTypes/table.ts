
import { defineType, defineField, defineArrayMember } from 'sanity';

export const table = defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'headerRows',
            title: 'Header Rows',
            type: 'number',
            initialValue: 1,
        }),
        defineField({
            name: 'rows',
            title: 'Rows',
            type: 'array',
            of: [
                defineArrayMember({
                    name: 'row',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'cells',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    name: 'cell',
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'value',
                                            title: 'Cell Content',
                                            type: 'array',
                                            of: [
                                                defineArrayMember({
                                                    type: 'block',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
});
