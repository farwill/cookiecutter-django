{%- if cookiecutter.use_htmx_alpine_tailwind == 'y' %}
// Tailwind CSS is loaded from templates/base.html
{%- else %}
import '@popperjs/core';
import 'bootstrap';
{%- endif %}
