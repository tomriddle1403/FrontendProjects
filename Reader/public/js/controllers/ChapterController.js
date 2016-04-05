app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
        books.success(function(data) {
            $scope.chapter = data[$routeParams.bookId].chapters[$routeParams.chapterId];
            // If there no more chapters left, go back to the bookshelf view
            if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
                $scope.nextChapterIndex = "#";
            }
        });
        $scope.currentBookIndex = parseInt($routeParams.bookId);
        $scope.currentChapterIndex = parseInt($routeParams.chapterId);
        $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    }
]);