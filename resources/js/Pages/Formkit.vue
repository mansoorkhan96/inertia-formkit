<script setup>
const submit = (fields, node) => console.log(fields);
</script>

<template>
    <FormKit type="form" @submit="submit" form-class="mt-9">
        <div class="columns-2">
            <FormKit
                type="text"
                name="email"
                validation="required|length:2,"
                validation-visibility="blur"
                label="Email"
            />

            <FormKit name="validate" type="hidden" value="" />
        </div>
    </FormKit>
</template>
