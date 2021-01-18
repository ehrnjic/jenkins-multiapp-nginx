pipeline {
    agent any
    stages {
        stage('Build all 3 images with docker-compose') {
            steps {
                sh '''
                    docker-compose -f docker-compose-build.yaml build
                '''
            }
        }
        stage('Deploy in test and run test script inside containers') {
            steps {
                sh '''
                    docker-compose -f docker-compose-test.yaml up -d
                    docker exec -i app1 npm test
                    docker exec -i app2 npm test
                    curl localhost:8081 && curl localhost:8081
                    docker-compose -f docker-compose-test.yaml up -d
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    echo 'Deploy'
                '''
            }
        }
    }
}