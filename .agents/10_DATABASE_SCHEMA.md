# NIRA Database Schema

# 1. Database Platform

Database:

Supabase PostgreSQL

Purpose:

Store dynamic content for NIRA public website.

------------------------------------------------------------------------

# 2. Database Principle

Database should support:

-   Product management
-   Impact reporting
-   Storytelling
-   Partnership communication

------------------------------------------------------------------------

# 3. Tables

# products

Purpose:

Store NIRA products.

Fields:

id name slug category description image_url material_source impact_value
created_at

------------------------------------------------------------------------

# materials

Purpose:

Store coconut transformation information.

Fields:

id name source_part description process output_product image_url

------------------------------------------------------------------------

# impact_metrics

Purpose:

Store measurable impact.

Fields:

id year category metric_name value unit description

Example:

Waste transformed: 5000 kg

------------------------------------------------------------------------

# community

Purpose:

Store community stories.

Fields:

id name location role story photo_url impact_description

------------------------------------------------------------------------

# journal

Purpose:

Store articles.

Fields:

id title slug content thumbnail author published_at

------------------------------------------------------------------------

# partners

Purpose:

Store collaboration information.

Fields:

id name logo category description

------------------------------------------------------------------------

# inquiries

Purpose:

Store partnership requests.

Fields:

id name organization email message status created_at

------------------------------------------------------------------------

# 4. Authentication

Not required in Phase 1.

Prepare architecture for future implementation.

------------------------------------------------------------------------

# 5. Future Expansion

Possible future tables:

-   orders
-   product_traceability
-   impact_reports
-   user_management
-   partner_portal
