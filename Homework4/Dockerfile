FROM postgres

# Admin login with postgres, wad
ENV POSTGRES_PASSWORD wad

# Init script for postgres database
COPY init.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
