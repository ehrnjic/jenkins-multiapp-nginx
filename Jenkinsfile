pipeline {

    agent any

    stages {
        stage('Build all 3 images with docker-compose') {
            steps {
                sh '''
                    docker-compose -f docker-compose.yaml build
                '''
            }
        }

        stage('Run test script inside container') {
            steps {
                sh '''
                    docker run -d --rm --name nodeapp-test -p 9000:3000 nodeapp:latest
                    docker exec -i nodeapp-test npm test
                    docker stop nodeapp-test
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker ps -f name=nodeapp-prod -q | xargs --no-run-if-empty docker stop
                    docker run -d --rm --name nodeapp-prod -p 3000:3000 nodeapp:latest
                '''
            }
        }
    }
}
}