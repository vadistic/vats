# spin standalone prisma isntance
docker-machine create \
	--driver amazonec2 \
	--amazonec2-region eu-west-1 \
	--amazonec2-instance-type t2.micro \
	--amazonec2-open-port 4466 \
	prisma-ec2
