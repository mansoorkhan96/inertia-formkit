<script setup>
import { useInertia } from "formkit-addon-inertia";

const submit = (fields, node) =>
    useInertia(node).post(route("submit.formkit"), fields, {
        preserveScroll: true,
    });
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
